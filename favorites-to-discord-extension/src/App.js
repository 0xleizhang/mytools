/*global chrome*/
import React, {useEffect, useState} from "react";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import {Button, Divider, Form, message, Select} from "antd";
import { saveLink} from "./service";

const {Option} = Select;

function App() {
    const [form] = Form.useForm();
    const [link, setLink] = useState({
        title: "",
        url: "",
        comment: "",
        topicId: "share",
        group: "",
        tags: "",
        from: 2,
    });

    useEffect(() => {
        chrome &&
        chrome.tabs &&
        chrome.tabs.query &&
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            console.warn(tabs);
            let tab = tabs[0];
            form.setFieldsValue({
                title: tab.title,
            });
            setLink((link) => {
                return {...link, url: tab.url, title: tab.title};
            });
        });

        return () => {
            console.log("destory ....");
        };
    }, []);

    const onFinish = (values) => {
        console.log(values);


        saveLink(link).then((res) => {
            message.info(res&&res.status);
        });
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    return (
        <div className="App">
            <Form
                onFinish={onFinish}
                name="control-hooks"
                onFinishFailed={onFinishFailed}
                form={form}
            >
                <Form.Item>
                    <Select
                        labelInValue
                        placeholder="Channel"
                        defaultActiveFirstOption={true}
                        showArrow={false}
                        filterOption={false}
                        value={link.topicId}
                        onChange={(value) => {
                            console.log(value);
                            setLink((link) => {
                                let newLink = {...link, topicId: value.value};
                                console.log(newLink);
                                return newLink;
                            });
                        }}
                        notFoundContent={null}
                    >
                        <Option value={"share"}>
                            share
                        </Option>
                        <Option value={"job"}>
                            job
                        </Option>
                    </Select>
                </Form.Item>

                <Divider/>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>

            <Divider/>


        </div>
    );
}

export default App;
