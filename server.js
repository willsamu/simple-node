function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const simpleNodeEnv = process.env.SIMPLE_NODE_ENV;
  while (true) {
    console.log(`Containers rule! (in ${simpleNodeEnv})`);
    await sleep(5000);
  }
}

main();
