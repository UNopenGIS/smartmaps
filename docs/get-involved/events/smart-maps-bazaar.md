# Smart Maps Bazaar Walking Tour

## Date and Location

Date: TBD Q2 2023

Location: Virtual

#### Overview
The Smart Maps Bazaar is a virtual walking tour of the Smart Maps Bazaar. The tour will be led by the Smart Maps Bazaar team and will include a live Q&A session.

#### Registration
Registration for this event is not yet open. Please check back later.

#### Schedule
TBD

## Smart Maps Bazaar Details

### What are the challenges?
United Nations Vector Tile Toolkit (UNVT) has been successful in enabling base map provision in a cloud-optimized way. By enabling easy sharing, access, and processing of vector geospatial data, we can save time and costs needed to utilize geospatial information. Additionally, the cloud optimization allows for easier integration with different applications, making it commonly accessible to more people, who can then utilize geospatial information to make better decisions. This approach is also forward-looking and inclusive, ensuring that everyone can benefit from the power of open geospatial information.

Acquiring and configuring servers in deploying UNVT was a bit of a headache. With cloud-optimized geospatial information, the server-side processing is not as complex. If we can also provision cost-effective, high-capacity, and flexible storage on-demand, we can share even more timely geospatial information. This will enable us to further enhance the accessibility and utilization of geospatial information for everyone.

Furthermore, access to geospatial information is expanding to include data from UAVs, LiDAR, 3D point clouds, and 3D city models related to facility management and smart cities. These datasets are significantly larger than vector-based base map information, and without innovative storage technologies, server issues could hinder the utilization of geospatial information.

### Introduction of the basic idea, pros and cons
The idea of a decentralized web is gaining new implementations under the keyword of Web3. The InterPlanetary File System (IPFS) is a relatively fast, stable, and secure implementation of a decentralized web. The idea of sharing cloud-optimized geospatial information using IPFS was born out of the encounter with this technology.

The basic idea behind Smart Maps Bazaar is to store cloud-optimized geospatial information on IPFS and share it with applications through gateways that provide open access.

In implementation, an IPFS gateway for open access to cloud-optimized file sharing is called Smart Maps Bazaar.

To list cloud-optimized geospatial information on Smart Maps Bazaar, one simply needs to add the geospatial information to their IPFS node and share the resulting content identifier with the application.

#### Pros

One of the pros for this idea is that it allows for IPFS nodes necessary for information sharing to be made much more affordable. As the amount of geospatial data to be shared grows, there may be cases where the demand for access speed for individual geospatial data decreases. This may make it possible to allocate reasonably priced storage for data with low access speed requirements.

Moreover, the concept of "pinning" is present in IPFS. By pinning data to one's own node, it may be possible to carry the data offline. This feature could also potentially work as a cache to enhance access speed at devices or sites.

#### Cons
One challenge of this idea is the lack of established methods to implement access restrictions. For the time being, it may be best to limit the Smart Maps Bazaar idea to existing open data or unclassified data. However, unclassified data is often massive in scale, and applying this idea to unclassified data alone could still lead to cost reductions.

### Demos (point cloud, city models, vector tiles, and imagery) with a little bit more technical details.
This seminar is called Walking Tour, and just like in the actual Bazaar where people can enjoy shopping, we also have a Walking Tour section in this seminar where participants can actually consume geospatial information.

During the tour, we will provide technical details specific to each data format.

We believe that this hands-on approach will help participants better understand the potential of Smart Maps Bazaar and the benefits of a decentralized web. This inclusive and interactive experience is open to everyone, regardless of technical expertise, and we welcome anyone who is interested in learning more about the future of spatial data sharing.

### Possible practical scenarios.
In DWG 7, Smart Maps Bazaar is realized using Raspberry Pi 4B. One of the possible practical scenarios includes placing nodes within a site. These nodes within a site can be used to share site-specific data or cache common data supplied from the global service center. Since IPFS is a content-addressed system, data duplication is automatically eliminated.

### What is the advantage of using Smart Maps Bazaar?
The benefits of using Smart Maps Bazaar include:

- Higher flexibility for server environment and storage requirements
- Utilization of content-addressable system to avoid information duplication and promote caching
- Standardized interface for system configuration simplification and unification
- Standardized interface for both internal organizational use and external public access, leading to improved user experience for internal users and enhanced partnership opportunities.

### Next steps
Smart Maps Bazaar is an experimental system to share vast amounts of open geospatial information in a cloud-optimized manner. Bringing together the efforts of those who stand to benefit from such a system can accelerate the development of this technology to the next level.

### Invitation
As members of DWG 7, we would like to propose an open and constructive discussion with UN staff members who participate in the UN Open GIS Initiative and UN Geospatial Network, as well as contributors who share our vision for the Smart Maps Bazaar. Our goal is to introduce the concept of the Smart Maps Bazaar and showcase a working web map to inspire collective efforts towards this concept. Let's have an open and honest conversation about how we can come together to make this vision a reality.
