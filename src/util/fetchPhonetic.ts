
export interface PhoneticMapItem {
    text: string;
    phonetic: string;
}

export interface PhoneticResponse {
    // Define your response structure here
    phonetic?: {
        SentRes?: string[];
        MapRes?: PhoneticMapItem[];
    };
    error?: string;
}

export async function fetchPhonetic(text: string, operation:string): Promise<PhoneticResponse> {
    const url = "https://all-in-one-phonetic.pk9009895.workers.dev/api/convert";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        text: text,
        operation: operation
    });

    const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json() as PhoneticResponse;

        return result;

    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}


