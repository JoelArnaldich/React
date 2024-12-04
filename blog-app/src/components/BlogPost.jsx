import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import { Card, Container, Row, Col } from 'react-bootstrap';
 
function BlogPosts() {
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsArray);
    };
 
    fetchPosts();
  }, []);
 
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Blog Públic</h1>
      <Row>
        {posts.map(post => (
          <Col key={post.id} md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
 
export default BlogPosts;
 