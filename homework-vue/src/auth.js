export default {
    user: {authenticated: false},
    authenticated: function () {
        fetch("http://localhost:3000/auth/authenticate", {
            credentials: 'include'
        }) // Don't forget to specify this if you need cookies
            .then((response) => response.json())
            .then((data) => {
                this.user.authenticated = data.authenticated;
                console.log(this.user);
            })
            .catch((e) => {
                console.log(e);
            });
        return this.user.authenticated;
    }
}