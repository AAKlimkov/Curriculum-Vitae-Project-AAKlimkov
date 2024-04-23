class AuthService {
  clearStorage() {
    localStorage.clear();
  }

  logout() {
    this.clearStorage();
    window.location.href = "/login";
  }

  clearStorageAndLogout() {
    this.logout();
  }
}

export default new AuthService();
