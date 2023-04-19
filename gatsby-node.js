exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/services/affordable-web-design-calgary`,
    toPath: `/services/web-design-calgary`,
  })
}
