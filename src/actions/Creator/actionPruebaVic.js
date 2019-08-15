export const fetchObject = (arg1, arg2) => (dispatch) => {
    return fetch(
        "http://dummy.restapiexample.com/api/v1/employees",
        {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            // credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": ""
            },
            // body: JSON.stringify({ "texto": arg1 }),
            redirect: "manual"
        }
    ).then(response => {
            if(response.ok) {
                return response;
            } else {
                var error = new Error("Error" + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errMes = new Error(error.message);
            throw errMes;
        }
    ).then(response => response.json()
    ).then(data => dispatch(successFetch(data))
    ).catch(error => dispatch(failedFetch(error.message)));
}

const successFetch = (data) => ({
    type: 1,
    isLoading: false,
    message: data,
    typeMessage: null
});

const failedFetch = (message) => ({
    type: 0,
    isLoading: false,
    message: message,
    typeMessage: null
});