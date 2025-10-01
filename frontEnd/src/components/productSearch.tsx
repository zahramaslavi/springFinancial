import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, CircularProgress, List, ListItem } from "@mui/material";
import { searchProducts } from "@/api/searchProducts";
import { Product } from "@/models/Product";

const ProductSearch: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!keyword.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const data = await searchProducts(keyword);
      setResults(data);
    } catch {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" gap={2} mt={4}>
        <Typography variant="h5" align="center">
          Search Products
        </Typography>

        <Box display="flex" gap={1}>
          <TextField
            fullWidth
            label="Enter keyword"
            variant="outlined"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <Button variant="contained" onClick={handleSearch} disabled={loading}>
            Search
          </Button>
        </Box>

        {loading && <CircularProgress sx={{ alignSelf: "center" }} />}
        {error && <Typography color="error">{error}</Typography>}

        <List>
          {results.map((p) => (
            <ListItem key={p.id}>
              <Typography>
                {p.name} — ${p.price}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ProductSearch;
