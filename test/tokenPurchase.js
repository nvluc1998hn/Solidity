const Token = artifacts.require("Token"); // Thay thế "Token" bằng tên hợp đồng Token của bạn

contract("Token Purchase Test", async (accounts) => {
    let tokenInstance;

    beforeEach(async () => {
        tokenInstance = await Token.new(); // Triển khai hợp đồng Token mới cho mỗi bài kiểm tra
    });

    it("should allow users to purchase tokens", async () => {
        const buyer = accounts[1];
        const purchaseAmount = web3.utils.toWei("1", "ether"); // Số tiền mua token (1 ETH)

        const initialBuyerBalance = await web3.eth.getBalance(buyer);
        const initialTokenBalance = await tokenInstance.balanceOf(buyer);

        // Gọi hàm mua token trên smart contract Token
        await tokenInstance.purchase({ from: buyer, value: purchaseAmount });

        const finalBuyerBalance = await web3.eth.getBalance(buyer);
        const finalTokenBalance = await tokenInstance.balanceOf(buyer);

        // Kiểm tra rằng số dư Ether của người mua đã giảm và số lượng token đã tăng đúng
        assert.equal(
            finalBuyerBalance,
            initialBuyerBalance - purchaseAmount,
            "Buyer's Ether balance should decrease by purchase amount"
        );

        assert.equal(
            finalTokenBalance - initialTokenBalance,
            purchaseAmount,
            "Buyer's token balance should increase by purchase amount"
        );
    });
});