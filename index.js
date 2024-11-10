module.exports.handler = async (event) => {
    // write hello world to the logs
    console.log("Hello World! Wong Jun Jie");
    // assign a value to a variable
    let message = "Wong Jun Jie's Serverless executed successfully!";

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: message,
                input: event,
            },
            null,
            2
        ),
    };
};
