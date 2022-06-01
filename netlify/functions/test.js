exports.handler = async function (event, context) {
  console.log("handler ran");
  console.log(event);

  return {
    statusCode: 200,
    header: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "Hello from test" }),
  };
};
