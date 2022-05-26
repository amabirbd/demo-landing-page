exports.handler = async function (event, context) {
  // your server-side functionality
  console.log("submit handler ran");

  return {
    statusCode: 200,
    header: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "I am from submission handler" }),
  };
};
