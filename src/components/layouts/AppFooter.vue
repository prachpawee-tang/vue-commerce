<template>
  <footer class="footer">
    <div class="footer-columns">
      <div class="footer-column">
        <h4>Support</h4>
        <p>123 Main Street, City</p>
        <p>Country</p>
        <p>Phone: +1 234 567 890</p>
        <p>Email: support@company.com</p>
      </div>

      <div class="footer-column">
        <h4>Account</h4>
        <ul>
          <li><RouterLink to="/account">My Account</RouterLink></li>
          <li><RouterLink to="/cart">Cart</RouterLink></li>
          <li><RouterLink to="/wishlist">Wishlist</RouterLink></li>
          <li><RouterLink to="/orders">Order History</RouterLink></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><RouterLink to="/about">About Us</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li><RouterLink to="/privacy">Privacy Policy</RouterLink></li>
          <li><RouterLink to="/terms">Terms of Service</RouterLink></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Download App</h4>
        <div class="app-links">
          <!-- <img src="/path/to/qrcode.png" alt="QR Code" class="qrcode" />
              <div class="store-buttons">
                <a href="#"><img src="/path/to/appstore.png" alt="App Store" /></a>
                <a href="#"><img src="/path/to/playstore.png" alt="Google Play" /></a>
              </div> -->
        </div>
      </div>
    </div>
    <p class="copyright">&copy; 2023 Your Company. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  padding: 2rem;
  background-color: #000;
  border-top: 1px solid var(--border-color);
  /* margin-top: 2rem; */
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-column h4 {
  color: var(--text-color);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-column p,
.footer-column li {
  color: var(--text-color);
  margin: 0.5rem 0;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column a {
  color: var(--link-color);
  text-decoration: none;
}

.footer-column a:hover {
  text-decoration: underline;
}

.app-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.qrcode {
  width: 100px;
  height: 100px;
}

.store-buttons img {
  width: 120px;
  display: block;
  margin: 0.5rem 0;
}

.copyright {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

@media (max-width: 768px) {
  .footer-columns {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-columns {
    grid-template-columns: 1fr;
  }
}
</style>
