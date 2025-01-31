


// import React, { useState, useEffect } from "react";
// import "./Main.css";
// import { Assets } from "../../Assets";
// import axios from "axios";

// const Main = ({ selectedCategory }) => {

//     console.log(selectedCategory,"ctryyyy")


//   const [menuItems, setMenuItems] = useState([]); 
//   const [showForm, setShowForm] = useState(false); 
//   const [menuItemData, setMenuItemData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: selectedCategory, 
//   });

//   useEffect(() => {
//     setMenuItemData((prevData) => ({
//       ...prevData,
//       category: selectedCategory, // Update category whenever selectedCategory changes
//     }));
//   }, [selectedCategory]);
  

  
//   const fetchMenuItems = async (category) => {
//     try {
//       const response = await axios.get(`https://resto-server.vercel.app/api/menuItems/${category}`);
//       setMenuItems(response.data);
//     } catch (error) {
//       console.error("Error fetching menu items:", error);
//     }
//   };

//   // Fetch MenuItems when the selectedCategory changes
//   useEffect(() => {
//     fetchMenuItems(selectedCategory);
//   }, [selectedCategory]);

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setMenuItemData({ ...menuItemData, [name]: value });
//   };

//   // Handle form submit
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Sending data:", menuItemData);
  
//       // Ensure Content-Type is set correctly
//       const response = await axios.post(
//         "https://resto-server.vercel.app/api/menuItems", 
//         menuItemData, 
//         {
//           headers: {
//             "Content-Type": "application/json", // Ensure proper content type
//           }
//         }
//       );
//       console.log("Menu item created:", response.data);
//       alert("Menu item created successfully!");
//       setMenuItemData({ name: "", description: "", price: "", category: selectedCategory });
//       setShowForm(false); // Hide form
//       fetchMenuItems(selectedCategory); // Refresh menu items list
//     } catch (error) {
//       console.error("Error creating menu item:", error);
//       alert("Failed to create menu item.");
//     }
//   };
  

//   return (
//     <div
//     className="main-container"
//     style={{
//       backgroundImage: `url(${Assets.mainBg})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//     }}
//   >
//     <div className="menu-items">
//       <div className="title-section">
//         <img src={Assets.line} alt="" />
//         <h1>{selectedCategory}</h1>
//         <img src={Assets.line} alt="" />
//       </div>
//       {menuItems.length > 0 ? (
//         <div className="menu-grid">
//           {menuItems.map((item) => (
//             <div className="menuitem-container" key={item._id}>
//               <div className="single-menu">
//                 <h3>
//                   {item.name}..........................${item.price}
//                 </h3>
//                 <span>{item.description}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No items available in this category</p>
//       )}
//     </div>
//     <button
//       className="add-menu-btn"
//       onClick={() => setShowForm(true)} // Show form when button is clicked
//     >
//       + Add Menu Item
//     </button>
//     {showForm && (
//       <form className="add-menu-form" onSubmit={handleFormSubmit}>
//         <h2>Add New Menu Item</h2>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={menuItemData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={menuItemData.description}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="number"
//             name="price"
//             value={menuItemData.price}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <div className="form-actions">
//           <button type="submit">Save Menu Item</button>
//           <button type="button" onClick={() => setShowForm(false)}>
//             Cancel
//           </button>
//         </div>
//       </form>
//     )}
//   </div>
  
//   );
// };

// export default Main;



import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = ({ selectedCategory }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [menuItemData, setMenuItemData] = useState({
    name: "",
    description: "",
    price: "",
    category: selectedCategory,
  });

  // Create axios instance with default config
  const api = axios.create({
    baseURL: 'https://resto-server.vercel.app/api',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const fetchMenuItems = async (category) => {
    try {
      const response = await api.get(`/menuItems/${category}`);
      setMenuItems(response.data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  useEffect(() => {
    fetchMenuItems(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setMenuItemData(prev => ({
      ...prev,
      category: selectedCategory,
    }));
  }, [selectedCategory]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenuItemData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/menuItems', menuItemData);
      console.log("Menu item created:", response.data);
      alert("Menu item created successfully!");
      setMenuItemData({
        name: "",
        description: "",
        price: "",
        category: selectedCategory
      });
      setShowForm(false);
      fetchMenuItems(selectedCategory);
    } catch (error) {
      console.error("Error creating menu item:", error.response?.data || error.message);
      alert(`Failed to create menu item: ${error.response?.data?.message || error.message}`);
    }
  };

  // Rest of your component remains the same...
  return (
    <div
        className="main-container"
        style={{
          backgroundImage: `url(${Assets.mainBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="menu-items">
          <div className="title-section">
            <img src={Assets.line} alt="" />
            <h1>{selectedCategory}</h1>
            <img src={Assets.line} alt="" />
          </div>
          {menuItems.length > 0 ? (
            <div className="menu-grid">
              {menuItems.map((item) => (
                <div className="menuitem-container" key={item._id}>
                  <div className="single-menu">
                    <h3>
                      {item.name}..........................${item.price}
                    </h3>
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No items available in this category</p>
          )}
        </div>
        <button
          className="add-menu-btn"
          onClick={() => setShowForm(true)} // Show form when button is clicked
        >
          + Add Menu Item
        </button>
        {showForm && (
          <form className="add-menu-form" onSubmit={handleFormSubmit}>
            <h2>Add New Menu Item</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={menuItemData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={menuItemData.description}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={menuItemData.price}
                onChange={handleInputChange}
                required
              />
            </label>
            <div className="form-actions">
              <button type="submit">Save Menu Item</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

  );
};

export default Main;

