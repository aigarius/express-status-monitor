module.exports = {
  title: 'Express Status',
  theme: 'default.css',
  path: '/status',
  socketPath: '/socket.io',
  socketPathServer: '/socket.io',
  spans: [
    {
      interval: 1,
      retention: 60,
    },
    {
      interval: 5,
      retention: 60,
    },
    {
      interval: 15,
      retention: 60,
    },
  ],
  port: null,
  websocket: null,
  iframe: false,
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
  ignoreStartsWith: '/admin',
  healthChecks: []
};
