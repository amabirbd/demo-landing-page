const someSecret = process.env.SOME_SECRET;

exports.handler = async function (event, context) {
  // your server-side functionality
  console.log("test handler ran");
  console.log(event);
  console.log(context);
  return {
    statusCode: 200,
    header: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "Hello world" }),
  };
};
