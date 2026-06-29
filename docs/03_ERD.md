# Mehmaan Hub - Entity Relationship Diagram (ERD)

## Overview

This document describes the database entities and their relationships.

---

# Entities

## Users

Stores all registered users.

Fields:

- id
- name
- email
- password
- phone
- profile_image
- account_type
- created_at

Relationship:

One User can own many Properties.

One User can create many Booking Requests.

One User can save many Favorites.

One User can write many Reviews.

---

## Properties

Stores all rental properties.

Fields:

- id
- owner_id
- title
- description
- city
- address
- rent
- property_type
- created_at

Relationship:

One Property belongs to one User.

One Property has many Images.

One Property has many Reviews.

One Property has many Booking Requests.

---

## Property Images

Stores multiple images for one property.

Fields:

- id
- property_id
- image_url

Relationship:

Many Images belong to one Property.

---

## Booking Requests

Stores booking/rental requests.

Fields:

- id
- property_id
- tenant_id
- status
- message
- created_at

Relationship:

One User can send many Booking Requests.

One Property can receive many Booking Requests.

---

## Favorites

Stores saved properties.

Fields:

- id
- user_id
- property_id

Relationship:

One User can save many Properties.

One Property can be saved by many Users.

---

## Reviews

Stores ratings and reviews.

Fields:

- id
- property_id
- user_id
- rating
- comment
- created_at

Relationship:

One User can write many Reviews.

One Property can have many Reviews.

---

## Notifications

Stores user notifications.

Fields:

- id
- user_id
- title
- message
- is_read
- created_at

---

# Relationships

User (1)

↓

Properties (Many)

↓

Property Images (Many)

↓

Booking Requests (Many)

↓

Reviews (Many)

User (1)

↓

Favorites (Many)

User (1)

↓

Notifications (Many)