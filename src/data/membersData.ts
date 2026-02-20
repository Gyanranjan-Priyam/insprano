export type Member = {
  name: string
  role: string
  image: string
  email?: string
}

// ─── Principal ────────────────────────────────────────────────────────────────
export const principal: Member = {
  name: "Prof. (Dr.) Subhransu Sekhar Dash",
  role: "Principal, GCE Kalahandi",
  image: "https://res.cloudinary.com/dhyxx8qjf/image/upload/v1771618941/99b284a0-33bb-42a5-baac-4a5fcca6cd74.png",
  email: "principal@gcekbpatna.ac.in",
}

// ─── Faculty Coordinators ─────────────────────────────────────────────────────
export const faculty: Member[] = [
  {
    name: "Prof. Faculty One",
    role: "Faculty Coordinator",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/members/faculty-1.jpg",
    email: "faculty1@gcekalahandi.ac.in",
  },
  {
    name: "Prof. Faculty Two",
    role: "Faculty Coordinator",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/members/faculty-2.jpg",
    email: "faculty2@gcekalahandi.ac.in",
  },
  {
    name: "Prof. Faculty Three",
    role: "Faculty Coordinator",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/members/faculty-3.jpg",
    email: "faculty3@gcekalahandi.ac.in",
  },
]

// ─── Dev Team ─────────────────────────────────────────────────────────────────
export const devMembers: Member[] = [
  {
    name: "Dev Member One",
    role: "Lead Developer",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/members/dev-1.jpg",
    email: "dev1@insprano.tech",
  },
  {
    name: "Dev Member Two",
    role: "Frontend Developer",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/members/dev-2.jpg",
    email: "dev2@insprano.tech",
  },
  {
    name: "Dev Member Three",
    role: "Backend Developer",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/members/dev-3.jpg",
    email: "dev3@insprano.tech",
  },
]

// ─── Event / Core Team ───────────────────────────────────────────────────────
export const eventMembers: Member[] = [
  {
    name: "Event Member One",
    role: "Event Coordinator",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/members/event-1.jpg",
    email: "event1@insprano.tech",
  },
  {
    name: "Event Member Two",
    role: "Event Coordinator",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/members/event-2.jpg",
    email: "event2@insprano.tech",
  },
  {
    name: "Event Member Three",
    role: "Event Coordinator",
    image: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/members/event-3.jpg",
    email: "event3@insprano.tech",
  },
]