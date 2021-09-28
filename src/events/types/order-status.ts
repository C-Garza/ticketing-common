export enum OrderStatus {
  // When order has been created
  // but the ticket it is trying to order has not been reserved
  Created = "created",
  // The ticket the order is trying to reserve has
  // already been reserved, or when the user cancels the order
  // Or the order expires before payment
  Cancelled = "cancelled",
  // The order has successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",
  // The order has resreved the ticket and
  // payment successful
  Complete = "complete"
};