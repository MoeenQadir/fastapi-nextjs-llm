
# ruff: noqa: I001 - Imports structured for Jinja2 template conditionals
"""Item CRUD routes - example API endpoints.

This module demonstrates a complete CRUD API for the Item entity.
You can use it as a template for creating your own endpoints.

The endpoints are:
- GET /items - List all items (with pagination if enabled)
- POST /items - Create a new item
- GET /items/{item_id} - Get a single item by ID
- PATCH /items/{item_id} - Update an item
- DELETE /items/{item_id} - Delete an item
"""

from fastapi import APIRouter, status
from fastapi_pagination import Page
from fastapi_pagination.ext.sqlalchemy import paginate
from sqlalchemy import select
from app.api.deps import DBSession, ItemSvc
from app.db.models.item import Item
from app.schemas.item import ItemCreate, ItemRead, ItemUpdate

router = APIRouter()


@router.get("", response_model=Page[ItemRead])
def list_items(db: DBSession):
    """List all items with pagination.

    Returns a paginated list of items. Use query parameters
    `page` and `size` to control pagination.
    """
    return paginate(db, select(Item))


@router.post("", response_model=ItemRead, status_code=status.HTTP_201_CREATED)
def create_item(
    item_in: ItemCreate,
    item_service: ItemSvc,
):
    """Create a new item.

    Creates an item with the provided title and optional description.
    """
    return item_service.create(item_in)


@router.get("/{item_id}", response_model=ItemRead)
def get_item(
    item_id: str,
    item_service: ItemSvc,
):
    """Get a single item by ID.

    Raises 404 if the item does not exist.
    """
    return item_service.get_by_id(item_id)


@router.patch("/{item_id}", response_model=ItemRead)
def update_item(
    item_id: str,
    item_in: ItemUpdate,
    item_service: ItemSvc,
):
    """Update an item.

    Supports partial updates - only provided fields are updated.
    Raises 404 if the item does not exist.
    """
    return item_service.update(item_id, item_in)


@router.delete("/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_item(
    item_id: str,
    item_service: ItemSvc,
):
    """Delete an item.

    Raises 404 if the item does not exist.
    """
    item_service.delete(item_id)
