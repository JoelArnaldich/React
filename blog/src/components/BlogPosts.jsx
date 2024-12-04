import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import CategoryMenu from './CategoryMenu'; // Importem el menú






function BlogPosts() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // Categoria seleccionada

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const postsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPosts(postsArray);
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        if (selectedCategory === '') {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(posts.filter(post => post.category === selectedCategory));
        }
    }, [selectedCategory, posts]);

    return (
        <Container className="mt-5">
            <CategoryMenu
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <Row>
                {filteredPosts.map(post => (
                    <Col key={post.id} md={4}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Img variant='top' src={`/${post.image}`} rounded />
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.content}</Card.Text>
                                <Card.Footer>
                                    <small className="text-muted">{post.category}</small>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BlogPosts;

