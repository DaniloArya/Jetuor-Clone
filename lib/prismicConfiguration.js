const Prismic = require('@prismicio/client');

const apiEndpoint = 'https://jetour.cdn.prismic.io/api/v2'

const Client = () => Prismic.client(apiEndpoint)

export default Client;