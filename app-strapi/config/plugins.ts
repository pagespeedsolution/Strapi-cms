module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 100,
      maxLimit: 100,
      playgroundAlways: true, 
      apolloServer: {
        introspection: true,  
      },
    },
  },
});
