import { Navbar, Nav } from 'react-bootstrap';

function CategoryMenu({ selectedCategory, setSelectedCategory }) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Blog Categories</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={() => setSelectedCategory('')}>Tots</Nav.Link>
                    <Nav.Link onClick={() => setSelectedCategory('nacional')}>Nacional</Nav.Link>
                    <Nav.Link onClick={() => setSelectedCategory('internacional')}>Internacional</Nav.Link>
                    <Nav.Link onClick={() => setSelectedCategory('deportes')}>Deportes</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CategoryMenu;
