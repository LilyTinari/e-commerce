const app = require("./app");

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// example test code
// chai.use(chaiHttp);

// describe('Cart System', function () {
//     let token;
//     let productId;

//     // Before all tests, connect to the database
//     before(async () => {
//         await mongoose.connect('mongodb://localhost:27017/express-mongoose-cart-test', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         // Clear collections before tests
//         await User.deleteMany({});
//         await Product.deleteMany({});
//         await Cart.deleteMany({});
//     });

//     // After all tests, disconnect from the database
//     after(async () => {
//         await mongoose.disconnect();
//     });

//     // Test Signup
//     it('should sign up a new user', async () => {
//         const res = await chai.request(app)
//             .post('/auth/signup')
//             .send({ email: 'testuser@example.com', password: 'testpassword' });

//         expect(res).to.have.status(201);
//         expect(res.body).to.have.property('message', 'User created');
//     });

//     // Test Login
//     it('should log in the user and return a JWT token', async () => {
//         const res = await chai.request(app)
//             .post('/auth/login')
//             .send({ email: 'testuser@example.com', password: 'testpassword' });

//         expect(res).to.have.status(200);
//         expect(res.body).to.have.property('token');
//         token = res.body.token; // Save token for further requests
//     });

//     // Add a product to the database for cart testing
//     it('should create a product for testing', async () => {
//         const product = new Product({ name: 'Test Product', price: 50 });
//         await product.save();
//         productId = product._id;
//     });

//     // Test adding product to the cart
//     it('should add a product to the user\'s cart', async () => {
//         const res = await chai.request(app)
//             .post('/cart/add')
//             .set('Authorization', `Bearer ${token}`)
//             .send({ productId, quantity: 2 });

//         expect(res).to.have.status(200);
//         expect(res.body).to.have.property('products');
//         expect(res.body.products[0]).to.have.property('quantity', 2);
//         expect(res.body.products[0].product.toString()).to.equal(productId.toString());
//     });

//     // Test viewing the cart
//     it('should get the user\'s cart', async () => {
//         const res = await chai.request(app)
//             .get('/cart')
//             .set('Authorization', `Bearer ${token}`);

//         expect(res).to.have.status(200);
//         expect(res.body).to.have.property('products');
//         expect(res.body.products[0]).to.have.property('quantity', 2);
//         expect(res.body.products[0].product._id.toString()).to.equal(productId.toString());
//         expect(res.body.products[0].product).to.have.property('name', 'Test Product');
//     });
// });
