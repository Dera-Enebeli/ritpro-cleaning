export interface Review {
  id: string;
  name: string;
  location?: string;
  rating: number;
  content: string;
  tags: string[];
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Sarah M.",
    location: "Brisbane",
    rating: 5,
    content:
      "Booked through the website and had a fantastic cleaner assigned within 24 hours. The whole process was seamless from quote to clean. Our regular fortnightly cleaner is always punctual and thorough — Ritepro makes it so easy.",
    tags: ["residential", "standard-clean", "platform"],
  },
  {
    id: "r2",
    name: "Michael C.",
    location: "Strata Manager",
    rating: 5,
    content:
      "As a strata manager, I need reliable contractors. Ritepro has been servicing our common areas for over a year — consistent quality, great communication, and all the compliance paperwork handled. One less thing to worry about.",
    tags: ["commercial", "strata"],
  },
  {
    id: "r3",
    name: "James T.",
    rating: 4,
    content:
      "Ritepro made finding a reliable cleaner so easy. The online quote tool gave me an instant price, and the end-of-lease clean was spotless. Got our full bond back without any issues.",
    tags: ["residential", "end-of-lease", "platform"],
  },
  {
    id: "r4",
    name: "Linda K.",
    location: "NDIS Coordinator",
    rating: 5,
    content:
      "We refer participants to Ritepro regularly. They understand the compliance requirements, communicate well with our coordinators, and the feedback from participants has been consistently positive. A trusted provider.",
    tags: ["ndis", "provider"],
  },
  {
    id: "r5",
    name: "David P.",
    location: "Brisbane",
    rating: 5,
    content:
      "Had Ritepro in for a deep clean before selling our home. They transformed the place — even the grout in the tiles looked new. The real estate agent commented on how spotless everything was. Highly recommended.",
    tags: ["residential", "deep-clean"],
  },
  {
    id: "r6",
    name: "Rachel W.",
    location: "Office Manager",
    rating: 5,
    content:
      "We switched to Ritepro for our office cleaning six months ago. Best decision. They're reliable, thorough, and their online reporting gives me full visibility. Our team actually notices the difference on clean days.",
    tags: ["commercial", "office"],
  },
  {
    id: "r7",
    name: "Tom B.",
    rating: 4,
    content:
      "The quote calculator on the website gave me an instant price which was exactly what I ended up paying. No surprises, no upsells. The Airbnb turnover clean was done perfectly and the booking system is dead simple.",
    tags: ["residential", "platform", "airbnb"],
  },
  {
    id: "r8",
    name: "Susan L.",
    rating: 5,
    content:
      "Finding a cleaning service that accepts CHSP clients was a challenge until we found Ritepro. They handle all the documentation and my support worker says the house has never been cleaner. Really grateful for this service.",
    tags: ["ndis", "provider", "aged-care"],
  },
  {
    id: "r9",
    name: "Priya R.",
    rating: 5,
    content:
      "I was skeptical about booking a cleaner online, but the instant quote and clear pricing made it an easy decision. The cleaner arrived on time, did a brilliant job, and Ritepro followed up to make sure I was happy. Great experience.",
    tags: ["residential", "standard-clean", "platform"],
  },
  {
    id: "r10",
    name: "Greg H.",
    location: "Builder",
    rating: 5,
    content:
      "We use Ritepro for post-construction cleans on our build sites. They're thorough, reliable, and understand the standard required for handover. Saves us a huge headache — just send them the address and it's done right.",
    tags: ["commercial", "builders-clean"],
  },
  {
    id: "r11",
    name: "Anita D.",
    location: "Brisbane",
    rating: 5,
    content:
      "Booked a pressure washing service through the website — the whole process took about two minutes. Our driveway and patio look brand new. The team arrived on time, worked hard all morning, and cleaned up after themselves. Brilliant.",
    tags: ["residential", "pressure-washing", "platform"],
  },
  {
    id: "r12",
    name: "Brendan S.",
    location: "Facilities Manager",
    rating: 5,
    content:
      "Ritepro handles window cleaning across our office portfolio. Reliable scheduling, good communication with building management, and they work around our tenants. The reporting after each visit is a nice touch for our compliance records.",
    tags: ["commercial", "window-cleaning"],
  },
  {
    id: "r13",
    name: "Janelle F.",
    location: "Body Corporate Chair",
    rating: 5,
    content:
      "We brought Ritepro in for our building's common areas after our previous contractor let standards slip. Night and day difference. The foyer, lifts, and hallways are consistently spotless, and the committee hasn't had a single complaint.",
    tags: ["commercial", "strata"],
  },
  {
    id: "r14",
    name: "Mark W.",
    rating: 4,
    content:
      "Honestly, the instant quote tool sold me. Put in my details, got a price immediately, booked a time. The end-of-lease clean was thorough and the real estate signed off without a single issue. Exactly what I needed.",
    tags: ["residential", "end-of-lease", "platform"],
  },
  {
    id: "r15",
    name: "Christine N.",
    location: "Aged Care Coordinator",
    rating: 5,
    content:
      "Ritepro has been supporting our Home Care Package clients for months now. They're patient, respectful, and adaptable to each client's needs. The feedback from our elderly clients has been wonderful — they feel safer and more comfortable in their homes.",
    tags: ["ndis", "provider", "aged-care"],
  },
  {
    id: "r16",
    name: "Emma L.",
    rating: 4,
    content:
      "Needed a move-out clean at short notice and Ritepro came through the same week. The place was left immaculate — we got our full bond back and the new tenants even commented on how clean everything was. Will definitely use them again.",
    tags: ["residential", "move-out", "platform"],
  },
  {
    id: "r17",
    name: "Vince A.",
    location: "Cafe Owner",
    rating: 5,
    content:
      "Our cafe needs daily cleaning and Ritepro has been faultless. They come in after hours, do a thorough job, and we never have to chase them. The team is consistent, so they know exactly where everything goes. A huge weight off my shoulders.",
    tags: ["commercial"],
  },
  {
    id: "r18",
    name: "Fiona K.",
    location: "Brisbane",
    rating: 5,
    content:
      "I've been with Ritepro for nearly two years now. Same cleaner every fortnight, same high standard every time. When I had to reschedule last minute, they sorted it without any fuss. That kind of reliability is hard to find.",
    tags: ["residential", "standard-clean", "long-term"],
  },
  {
    id: "r19",
    name: "Dr. Narelle S.",
    location: "Medical Practice",
    rating: 5,
    content:
      "Infection control is non-negotiable in a medical setting. Ritepro understood our requirements immediately — correct cleaning products, proper waste handling, and they work around our patient hours. Their team is professional and discreet.",
    tags: ["commercial", "medical"],
  },
  {
    id: "r20",
    name: "Terry M.",
    location: "NDIS Participant",
    rating: 5,
    content:
      "My support coordinator set me up with Ritepro and it's made a real difference. The cleaner is patient, respectful of my space, and does a wonderful job. I feel much more comfortable in my home now. So glad this service is available.",
    tags: ["ndis", "aged-care"],
  },
  {
    id: "r21",
    name: "Angela P.",
    location: "Brisbane",
    rating: 5,
    content:
      "Absolutely love my fortnightly clean. My cleaner is thorough, friendly, and always goes the extra mile. The online booking is so easy to manage and reschedule when I need to.",
    tags: ["residential", "standard-clean", "platform"],
  },
  {
    id: "r22",
    name: "Steve R.",
    location: "Warehouse Manager",
    rating: 5,
    content:
      "Industrial cleaning is a different beast altogether. Ritepro handles our warehouse with the right equipment and understands OHS requirements. A professional operation from start to finish.",
    tags: ["commercial", "industrial"],
  },
  {
    id: "r23",
    name: "Maria T.",
    rating: 5,
    content:
      "Finally found a cleaning service that understands NDIS plans and billing. The communication with my plan manager has been seamless, and the cleaning quality is outstanding. Highly recommend to other participants.",
    tags: ["ndis", "platform"],
  },
  {
    id: "r24",
    name: "Peter J.",
    location: "Brisbane",
    rating: 4,
    content:
      "Booked a deep clean through the website. The team arrived on time, worked for hours, and left the house sparkling. Even cleaned areas I hadn't thought about. Fair pricing too.",
    tags: ["residential", "deep-clean", "platform"],
  },
  {
    id: "r25",
    name: "Kate W.",
    location: "Childcare Director",
    rating: 5,
    content:
      "Ritepro cleans our childcare centre daily. They use child-safe products, work around our operating hours, and the staff are all Blue Card holders. Exactly what we need.",
    tags: ["commercial"],
  },
  {
    id: "r26",
    name: "Daniel H.",
    rating: 4,
    content:
      "Needed an end-of-lease clean urgently and Ritepro delivered. The real estate agent passed the inspection with zero issues. Full bond returned. Couldn't ask for more.",
    tags: ["residential", "end-of-lease"],
  },
  {
    id: "r27",
    name: "Natalie B.",
    rating: 3,
    content:
      "Booking online was straightforward and the cleaner arrived when they said they would. The clean was decent — everything was tidy enough afterwards. Would consider using again if needed.",
    tags: ["residential", "platform"],
  },
  {
    id: "r28",
    name: "Andrew M.",
    location: "School Business Manager",
    rating: 5,
    content:
      "We brought Ritepro in for a trial across two school sites and expanded to all five within three months. Consistent standards, great communication with our facilities team, and they handle the compliance side properly.",
    tags: ["commercial"],
  },
  {
    id: "r29",
    name: "Sofia L.",
    rating: 4,
    content:
      "Manage several Airbnbs and Ritepro handles the turnover cleans. Reliable, thorough, and easy to schedule through their system. My guests consistently leave positive comments about cleanliness.",
    tags: ["residential", "airbnb"],
  },
  {
    id: "r30",
    name: "Mick O.",
    location: "Brisbane",
    rating: 5,
    content:
      "Been with Ritepro for over a year now. Same cleaner, same quality, every time. They even caught a small maintenance issue and flagged it for us before it became a big problem. Real value add.",
    tags: ["residential", "standard-clean", "long-term"],
  },
  {
    id: "r31",
    name: "Jessica F.",
    rating: 3,
    content:
      "Had our carpets steam cleaned. Most of the tougher stains came out and the price seemed reasonable. The team was polite and moved furniture back when finished. It did the job but I wasn't blown away — about what I expected for the price.",
    tags: ["residential", "carpet-cleaning"],
  },
  {
    id: "r32",
    name: "Lisa M.",
    location: "Boutique Owner",
    rating: 5,
    content:
      "Having a clean shop front and floor makes a real difference to foot traffic. Ritepro comes in twice a week and never misses a spot. Professional and discreet with customers around.",
    tags: ["commercial", "retail"],
  },
  {
    id: "r33",
    name: "Nathan S.",
    location: "Support Coordinator",
    rating: 4,
    content:
      "Ritepro are one of the more reliable providers we work with. Good communication, consistent service, and participants are happy. Room for improvement on short-notice availability but overall solid.",
    tags: ["ndis", "provider"],
  },
  {
    id: "r34",
    name: "Carol B.",
    rating: 3,
    content:
      "Added oven cleaning as an add-on. It was definitely cleaner than before but I wouldn't say it was like new. Easy enough to add through the booking system. Reasonable for the extra cost.",
    tags: ["residential", "platform"],
  },
  {
    id: "r35",
    name: "Tim R.",
    location: "IT Company",
    rating: 5,
    content:
      "Our office has sensitive equipment and Ritepro's team are trained on how to clean around it properly. Reliable, good communicators, and the online portal makes managing our account simple.",
    tags: ["commercial", "office"],
  },
];

export const featuredReviews = reviews.filter((r) =>
  ["r1", "r2", "r4", "r5", "r6", "r9", "r10", "r12", "r13", "r15", "r17", "r18", "r19", "r20", "r21", "r22", "r24", "r25", "r28", "r30", "r32", "r35"].includes(r.id)
);

export const reviewStats = {
  average: 4.6,
  total: 50,
  distribution: [
    { stars: 5, count: 34, percentage: 68 },
    { stars: 4, count: 12, percentage: 24 },
    { stars: 3, count: 4, percentage: 8 },
  ],
};

export const googleRating = {
  stars: 4.9,
  count: 148,
};
