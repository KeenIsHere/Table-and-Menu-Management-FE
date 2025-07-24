"use client"

import { useState } from "react"
import CustomButton from "./components/custom-button"
import { useAuthContext, AuthProvider } from "./context/use-auth-context"
import MenuPage from "./components/menu-page"
import AboutPage from "./components/about-page"
import ContactPage from "./components/contact-page"
import "./home-page.css"

// Sample table data
const tables = [
  {
    id: 1,
    name: "Window Table for 2",
    capacity: 2,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop",
    location: "By the window",
    amenities: ["Natural light", "Street view"],
    pricePerHour: 15,
  },
  {
    id: 2,
    name: "Cozy Corner Booth",
    capacity: 4,
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=300&h=300&fit=crop",
    location: "Corner section",
    amenities: ["Private seating", "Comfortable cushions"],
    pricePerHour: 25,
  },
  {
    id: 3,
    name: "Central Table for 6",
    capacity: 6,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop",
    location: "Main dining area",
    amenities: ["Spacious", "Great for groups"],
    pricePerHour: 35,
  },
  {
    id: 4,
    name: "Quiet Study Nook",
    capacity: 2,
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=300&h=300&fit=crop",
    location: "Quiet zone",
    amenities: ["WiFi", "Power outlets", "Quiet atmosphere"],
    pricePerHour: 20,
  },
  {
    id: 5,
    name: "Outdoor Patio Table",
    capacity: 4,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=300&fit=crop",
    location: "Outdoor patio",
    amenities: ["Fresh air", "Garden view"],
    pricePerHour: 30,
  },
  {
    id: 6,
    name: "Bar Counter Seats",
    capacity: 3,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=300&fit=crop",
    location: "Coffee bar",
    amenities: ["Watch baristas work", "Quick service"],
    pricePerHour: 18,
  },
]

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
]

const capacityFilters = ["All", "2 seats", "3-4 seats", "5+ seats"]

function HomePage() {
  const { logout } = useAuthContext()
  const [bookings, setBookings] = useState([])
  const [cart, setCart] = useState([])
  const [selectedCapacity, setSelectedCapacity] = useState("All")
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])
  const [currentPage, setCurrentPage] = useState("home")

  const addBooking = (table, timeSlot, duration = 2) => {
    const booking = {
      id: Date.now(),
      table,
      timeSlot,
      duration,
      date: selectedDate,
      totalPrice: table.pricePerHour * duration,
      status: "confirmed",
    }

    setBookings((prevBookings) => [...prevBookings, booking])
  }

  const removeBooking = (bookingId) => {
    setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== bookingId))
  }

  const updateBookingDuration = (bookingId, newDuration) => {
    if (newDuration <= 0) {
      removeBooking(bookingId)
      return
    }

    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === bookingId
          ? {
              ...booking,
              duration: newDuration,
              totalPrice: booking.table.pricePerHour * newDuration,
            }
          : booking,
      ),
    )
  }

  const getTotalCost = () => {
    return bookings.reduce((total, booking) => total + booking.totalPrice, 0)
  }

  // Cart functions
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId)
      return
    }

    setCart((prevCart) => prevCart.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const filteredTables =
    selectedCapacity === "All"
      ? tables
      : tables.filter((table) => {
          if (selectedCapacity === "2 seats") return table.capacity === 2
          if (selectedCapacity === "3-4 seats") return table.capacity >= 3 && table.capacity <= 4
          if (selectedCapacity === "5+ seats") return table.capacity >= 5
          return true
        })

  const bookingCount = bookings.length
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  // Common header component
  const renderHeader = () => (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>☕ CafeBook</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#" onClick={() => setCurrentPage("home")} className={currentPage === "home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setCurrentPage("tables")} className={currentPage === "tables" ? "active" : ""}>
                Tables
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setCurrentPage("menu")} className={currentPage === "menu" ? "active" : ""}>
                Menu
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setCurrentPage("about")} className={currentPage === "about" ? "active" : ""}>
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setCurrentPage("contact")}
                className={currentPage === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <div
            className="mobile-menu-btn"
            onClick={() => document.getElementById("mobile-nav")?.classList.toggle("open")}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* Cart Icon */}
          <div className="cart-icon" onClick={() => document.getElementById("cart-sidebar")?.classList.toggle("open")}>
            <span className="cart-count">{cartItemCount}</span>🛒
          </div>
          {/* Booking Icon - only show on home page */}
          {currentPage === "home" && (
            <div
              className="booking-icon"
              onClick={() => document.getElementById("booking-sidebar")?.classList.toggle("open")}
            >
              <span className="booking-count">{bookingCount}</span>📅
            </div>
          )}
          <CustomButton onPress={logout} name="Logout" />
        </div>
      </div>
    </header>
  )

  // Common mobile nav component
  const renderMobileNav = () => (
    <div id="mobile-nav" className="mobile-nav">
      <div className="mobile-nav-content">
        <div className="mobile-nav-header">
          <h2>☕ CafeBook</h2>
          <button
            className="close-mobile-nav"
            onClick={() => document.getElementById("mobile-nav")?.classList.remove("open")}
          >
            ✕
          </button>
        </div>
        <nav className="mobile-nav-links">
          <a
            href="#"
            onClick={() => {
              setCurrentPage("home")
              document.getElementById("mobile-nav")?.classList.remove("open")
            }}
          >
            🏠 Home
          </a>
          <a
            href="#"
            onClick={() => {
              setCurrentPage("tables")
              document.getElementById("mobile-nav")?.classList.remove("open")
            }}
          >
            🪑 Tables
          </a>
          <a
            href="#"
            onClick={() => {
              setCurrentPage("menu")
              document.getElementById("mobile-nav")?.classList.remove("open")
            }}
          >
            🍽️ Menu
          </a>
          <a
            href="#"
            onClick={() => {
              setCurrentPage("about")
              document.getElementById("mobile-nav")?.classList.remove("open")
            }}
          >
            ℹ️ About
          </a>
          <a
            href="#"
            onClick={() => {
              setCurrentPage("contact")
              document.getElementById("mobile-nav")?.classList.remove("open")
            }}
          >
            📞 Contact
          </a>
          <div className="mobile-nav-divider"></div>
          <a
            href="#"
            onClick={() => {
              document.getElementById("cart-sidebar")?.classList.toggle("open")
              document.getElementById("mobile-nav")?.classList.remove("open")
            }}
          >
            🛒 View Cart ({cartItemCount})
          </a>
          <a
            href="#"
            onClick={() => {
              logout()
              document.getElementById("mobile-nav")?.classList.remove("open")
            }}
          >
            🚪 Logout
          </a>
        </nav>
      </div>
    </div>
  )

  // Common cart sidebar component
  const renderCartSidebar = () => (
    <div id="cart-sidebar" className="cart-sidebar">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button
          className="close-cart"
          onClick={() => document.getElementById("cart-sidebar")?.classList.remove("open")}
        >
          ✕
        </button>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image || "/placeholder.svg"} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                ✕
              </button>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <strong>Total: ${getCartTotal().toFixed(2)}</strong>
          </div>
          <CustomButton name="Checkout" onPress={() => alert("Checkout functionality coming soon!")} />
        </div>
      )}
    </div>
  )

  // Render different pages based on currentPage state
  if (currentPage === "menu") {
    return (
      <div className="cafe-home">
        {renderHeader()}
        {renderMobileNav()}
        {renderCartSidebar()}
        <MenuPage cart={cart} setCart={setCart} />
      </div>
    )
  }

  if (currentPage === "about") {
    return (
      <div className="cafe-home">
        {renderHeader()}
        {renderMobileNav()}
        {renderCartSidebar()}
        <AboutPage />
      </div>
    )
  }

  if (currentPage === "contact") {
    return (
      <div className="cafe-home">
        {renderHeader()}
        {renderMobileNav()}
        {renderCartSidebar()}
        <ContactPage />
      </div>
    )
  }

  return (
    <div className="cafe-home">
      {/* Header */}
      {renderHeader()}
      {renderMobileNav()}
      {renderCartSidebar()}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Reserve Your Perfect Spot</h1>
          <p>Book a table at our cozy coffee cafe and enjoy premium coffee in comfort</p>
          <CustomButton
            name="Book Now"
            onPress={() => document.getElementById("tables")?.scrollIntoView({ behavior: "smooth" })}
          />
        </div>
      </section>

      {/* Date and Capacity Filter */}
      <section className="filter-section">
        <div className="container">
          <h2>Find Your Table</h2>
          <div className="filters">
            <div className="date-filter">
              <label htmlFor="date">Select Date:</label>
              <input
                type="date"
                id="date"
                value={selectedDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="date-input"
              />
            </div>
            <div className="capacity-buttons">
              {capacityFilters.map((capacity) => (
                <button
                  key={capacity}
                  className={`capacity-btn ${selectedCapacity === capacity ? "active" : ""}`}
                  onClick={() => setSelectedCapacity(capacity)}
                >
                  {capacity}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tables Section */}
      <section id="tables" className="tables-section">
        <div className="container">
          <h2>Available Tables</h2>
          <div className="tables-grid">
            {filteredTables.map((table) => (
              <div key={table.id} className="table-card">
                <div className="table-image">
                  <img src={table.image || "/placeholder.svg"} alt={table.name} />
                  <div className="table-overlay">
                    <div className="time-slots">
                      <h4>Available Times:</h4>
                      <div className="time-grid">
                        {timeSlots.slice(0, 4).map((time) => (
                          <button key={time} className="time-slot" onClick={() => addBooking(table, time)}>
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-info">
                  <h3>{table.name}</h3>
                  <p className="table-location">📍 {table.location}</p>
                  <p className="table-capacity">👥 Seats {table.capacity} people</p>
                  <div className="table-amenities">
                    {table.amenities.map((amenity) => (
                      <span key={amenity} className="amenity-tag">
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="table-price">${table.pricePerHour}/hour</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Sidebar */}
      <div id="booking-sidebar" className="booking-sidebar">
        <div className="booking-header">
          <h3>Your Bookings</h3>
          <button
            className="close-booking"
            onClick={() => document.getElementById("booking-sidebar")?.classList.remove("open")}
          >
            ✕
          </button>
        </div>
        <div className="booking-items">
          {bookings.length === 0 ? (
            <p className="empty-bookings">No bookings yet</p>
          ) : (
            bookings.map((booking) => (
              <div key={booking.id} className="booking-item">
                <img src={booking.table.image || "/placeholder.svg"} alt={booking.table.name} />
                <div className="booking-item-info">
                  <h4>{booking.table.name}</h4>
                  <p>📅 {booking.date}</p>
                  <p>🕐 {booking.timeSlot}</p>
                  <p>💰 ${booking.table.pricePerHour}/hour</p>
                  <div className="duration-controls">
                    <label>Duration (hours):</label>
                    <button onClick={() => updateBookingDuration(booking.id, booking.duration - 1)}>-</button>
                    <span>{booking.duration}</span>
                    <button onClick={() => updateBookingDuration(booking.id, booking.duration + 1)}>+</button>
                  </div>
                  <p className="booking-total">Total: ${booking.totalPrice}</p>
                </div>
                <button className="remove-booking" onClick={() => removeBooking(booking.id)}>
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
        {bookings.length > 0 && (
          <div className="booking-footer">
            <div className="booking-total">
              <strong>Total Cost: ${getTotalCost().toFixed(2)}</strong>
            </div>
            <CustomButton name="Confirm Bookings" onPress={() => alert("Booking confirmation coming soon!")} />
          </div>
        )}
      </div>
    </div>
  )
}

// Wrap the HomePage with AuthProvider
export default function HomePageWithAuth() {
  return (
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  )
}
