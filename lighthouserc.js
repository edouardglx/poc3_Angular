// configuration Lighthouse CI
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      staticDistDir: "./dist/",
    },
    assert: {
      assertions: {
        "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
