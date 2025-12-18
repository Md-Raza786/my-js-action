const core = require('@actions/core');

try {
  // Read input
  const name = core.getInput('name');

  // Print message
  console.log(`Hello, ${name}!`);
} catch (error) {
  core.setFailed(error.message);
}

