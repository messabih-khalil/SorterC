export async function randomListGenerator(length) {
  return await $.ajax({
    type: "POST",
    url: "/random",
    data: JSON.stringify([length]),
    contentType: "application/json",
    dataType: "json",
  });
}
