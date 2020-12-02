export default ({ $axios, env }) => {
    $axios.onRequest(config => {
        config.headers.common['Content-Type'] = 'application/json';
    });
}