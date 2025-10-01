import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Container, List, ListItem, Typography } from "@mui/material";
import { getProductsApi, generateProductsApi } from "../api/productsApi";
import { Product } from "../models/Product";

const ProductManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProductsApi();
      setProducts(data);
    } catch {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      await generateProductsApi();
      await fetchProducts(); // refresh after generation
    } catch {
      setError("Failed to generate products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" gap={2} mt={4}>
        <Typography variant="h5" align="center">
          Product Manager
        </Typography>

        <Button variant="contained" onClick={handleGenerate} disabled={loading}>
          Generate Products
        </Button>

        {loading && <CircularProgress sx={{ alignSelf: "center" }} />}
        {error && <Typography color="error">{error}</Typography>}

        <List>
          {products.map((p) => (
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

export default ProductManager;
