import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";
import { FaAngleDown, FaEdit, FaTrash } from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Fashion",
    subcategories: []
  },
  {
    id: 2,
    name: "Electronics",
    subcategories: [
      { id: 1, name: "Mobile" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Samsung" },
      { id: 4, name: "OPPO" },
      { id: 5, name: "Vivo" },
      { id: 6, name: "Laptops" },
      { id: 7, name: "Smart Watch" },
      { id: 8, name: "Chargers" }
    ]
  },
  {
    id: 3,
    name: "Bags",
    subcategories: []
  },
  {
    id: 4,
    name: "Footwear",
    subcategories: []
  }
];

const SubCatList = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {categories.map((cat) => (
        <Accordion
          key={cat.id}
          expanded={expanded === cat.id}
          onChange={handleChange(cat.id)}
          sx={{ boxShadow: "none", border: "1px solid #eee", mb: 1 }}
        >
          <AccordionSummary
            expandIcon={<FaAngleDown />}
            sx={{ backgroundColor: "#f5f5f5" }}
          >
            <Typography fontWeight={600}>{cat.name}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List>
              {cat.subcategories.map((sub) => (
                <div key={sub.id}>
                  <ListItem
                    secondaryAction={
                      <div>
                        <IconButton edge="end" aria-label="edit">
                          <FaEdit />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                          <FaTrash />
                        </IconButton>
                      </div>
                    }
                  >
                    <ListItemText primary={sub.name} />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default SubCatList;
