const HostPrefix = "https://bitseatech.com"

function postData(url, data) {
    fetch(url, {
        body: JSON.stringify({"content": data.url}),
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "content-type": "application/json",
        },
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors",
        redirect: "follow", // manual, *follow, error
    })

}

export async function saveLink(link) {
    if(link.url === ""){
        return Promise.resolve();
    }
    //share channel
    let url = 'https://discord.com/api/webhooks/1026792103495348224/DFPdGKWe9ia6LTWbjnPWtXZUUQNlgIFVzsEGpbzcXfMgelEf6RyN5kcaacX1jvKwY3EY'
    if (link.topicId === 'job') {
        url = 'https://discord.com/api/webhooks/1093748730773127258/sTcqwt2kdF7YQ1HaYcCRXUiMXqhcBUNNU-Cjj3IuKbWB9QYACIGMHa-hNuBvkmwPff9B'
    }
    return postData(url, link);
}


export const config = {UrlPrefix: HostPrefix}

