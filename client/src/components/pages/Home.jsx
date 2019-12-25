import React from 'react'

export default function Home() {
  return (
    <div className="Home">
      <div className="image">
        <img
          className="banner"
          src="images/Car-Parts.jpg"
          alt="cannot display"
        />
      </div>
      <h3 className="attention">ATTENTION PART MANAGERS!!!</h3>
      <div className="contents">
        <div className="left">
          <p>
            Are you dealing with slow-moving idle inventory or excess stock?
            Dealermine can help turn your dust into gold. Slow moving inventory
            kills the bottom line, and the fact is, if you haven’t sold it
            within 6 months there is a 65% chance that the part will never
            sell*; 9 months and it goes up to 85%*; 12 months and the holding
            cost is about equal to the profit margin* that you could have
            earned. What does this all mean to you?
          </p>
          <h3 className="idle">IDLE STOCK=LOST SALES=REDUCED PROFITS</h3>
          <p>
            We realize the challenges that you face to keep a successful
            inventory day-to-day and month-to-month. You are accountable to the
            customer, factory representative, technician and ultimately the
            dealership. Dealermine works for you to help manage your parts
            inventory more efficiently and more profitably. Since 1985, we’ve
            been matching buyers and sellers of new parts to create more sales
            and increased profits. Let us do the same for you. We specialize in
            working with Ford, GM, Chrysler and import dealerships. Partner with
            us to produce greater profits and reduce idle stock. Have us run the
            numbers for you or sign-up now.
          </p>

          <p> * According to industry experts</p>
        </div>
        <div className="right">
          <button>SIGN UP NOW !!!</button>
          <button>RUN THE NUMBERS!!!</button>
        </div>

        <div></div>
      </div>
    </div>
  )
}
