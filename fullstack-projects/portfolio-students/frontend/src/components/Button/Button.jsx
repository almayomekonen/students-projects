import Button from "@mui/material/Button";

// eslint-disable-next-line react/prop-types
export default function ButtonElem({ children, ...props }) {
  return (
    <Button variant="outlined" {...props}>
      {children}
    </Button>
  );
}
