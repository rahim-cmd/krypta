import cardData from "../components/data/CustomerData";
import CustomerCard from "../components/CustomerCard";
import '../components/customerCards.css'
export default function CustomerCardRow() {
  return (
    <div className="container text-center">
        <h4 className="p-5">Our Customers</h4>
    <div className="service-cards-row image-container">
      {cardData.map((card) => (
        <CustomerCard
          key={card.id}
          image={card.image}
          title={card.title}
        />
      ))}
    </div>
    </div>
  );
}
