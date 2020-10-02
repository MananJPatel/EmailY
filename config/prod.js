// module.exports = {
//     googleClientID: '577002872517-ign35sbk1f2fe6if9lepsql8so0d286s.apps.googleusercontent.com',
//     googleClientSecret: 'qPrnk_1Pd30CPmpWYGdq8dt1',
//     mongoURI: 'mongodb+srv://p00gz:eATYhgRkLx9nTpng@emaily.bbz7d.mongodb.net/test?retryWrites=true&w=majority',
//     cookieKey: 'qwertyuiosdfghjkldfghjkertyuicvbnmdfghjdfghjkdfghjdfghjcvbnsdfghsdfgh'
// };

module.exports = {
    googleClientID: 'process.env.GOOGLE_CLIENT_ID',
    googleClientSecret: 'process.env.GOOGLE_CLIENT_SECRET',
    mongoURI: 'process.env.MONGO_URI',
    cookieKey: 'process.env.COOKIE_KEY'
};