module.exports = function (from, email, message) {
  return `
      <h1>This is message from ${from}</h1>
      <h2>This is message from ${email}</h2>
      <section>
        <p>${message}</p>
      </section>
  `;
};