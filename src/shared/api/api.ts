export const auth = async () => {
    const response = await fetch(import.meta.env.VITE_API + '/' + import.meta.env.VITE_URI_CREATE_TOKEN, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "AccessKey": import.meta.env.VITE_AccessKey,
        },
        body: JSON.stringify({
            "idClient": import.meta.env.VITE_ClientID,
            "accessToken": "",
            "paramName": "device",
            "paramValue": import.meta.env.VITE_DeviceID,
            "latitude": 0,
            "longitude": 0,
            "sourceQuery": 0
        })
    })
    return response
}

export const getBonus = async (accessToken: string) => {
    const response = await fetch(import.meta.env.VITE_API + '/' + import.meta.env.VITE_URI_GET_BONUS + '/' + accessToken, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "AccessKey": import.meta.env.VITE_AccessKey,
        },
    })
    return response
}


 

