function status(request, response) {
  response.status(200).json({
    message: "api de status",
  });
}

export default status;
