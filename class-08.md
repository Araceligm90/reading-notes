# CLASS 8 READING NOTES 

## APIs


### API Design Best Practices.


**1. What does REST stand for?**

Representational State Transfer


**2. REST APIs are designed around a ____.**

*Resources.* Any kind of object, data, or service that can be accessed by the client.


**3. What is an identifier of a resource? Give an example.**

A URI (Uniform Resource Identifier) that uniquely identifies that resource.


**4. What are the most common HTTP verbs?**

GET, POST, PUT, PATCH, and DELETE.


**5. What should the URIs be based on?**

On nouns (the resource) and not verbs (the operations of the resource).


**6. Give an example of a good URI.**

One that follows this parameter: collection/item/collection.


**7. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?**

It means that it sends a lot of requests. It’s a bad thing because it can increase the latency of a request and incur additional bandwidth costs.


**8. What status code does a successful GET request return?**

Code 200, which means that everything is OK.


**9. What status code does an unsuccessful GET request return?**

Either ode 404, which means Not Found or 204, which means No Content.


**10. What status code does a successful POST request return?**

Code 201, which means Created.


**11. What status code does a successful DELETE request return?**

Code 204 (No Content).
