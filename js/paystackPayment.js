

const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_17c10945e858256f5ca0ba9f9042865f80c75d90",
      email: "example@email.com",
      amount: 10000,

      onSuccess: (transaction) => {
        // Payment complete! Reference: transaction.reference
        alert("success is transaction");
        console.log(transaction);
      },
      onCancel: () => {
        // user closed popup
        alert("Transaction cancelled");
      },
    });
}