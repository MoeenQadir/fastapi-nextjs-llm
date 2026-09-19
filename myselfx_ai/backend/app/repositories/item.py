
"""Item repository (SQLite sync).

Contains database operations for Item entity. Business logic
should be handled by ItemService in app/services/item.py.
"""

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.models.item import Item


def get_by_id(db: Session, item_id: str) -> Item | None:
    """Get item by ID."""
    return db.get(Item, item_id)


def get_multi(
    db: Session,
    *,
    skip: int = 0,
    limit: int = 100,
    active_only: bool = False,
) -> list[Item]:
    """Get multiple items with pagination."""
    query = select(Item)
    if active_only:
        query = query.where(Item.is_active == True)  # noqa: E712
    query = query.offset(skip).limit(limit)
    result = db.execute(query)
    return list(result.scalars().all())


def create(
    db: Session,
    *,
    title: str,
    description: str | None = None,
) -> Item:
    """Create a new item."""
    item = Item(
        title=title,
        description=description,
    )
    db.add(item)
    db.flush()
    db.refresh(item)
    return item


def update(
    db: Session,
    *,
    db_item: Item,
    update_data: dict,
) -> Item:
    """Update an item."""
    for field, value in update_data.items():
        setattr(db_item, field, value)

    db.add(db_item)
    db.flush()
    db.refresh(db_item)
    return db_item


def delete(db: Session, item_id: str) -> Item | None:
    """Delete an item."""
    item = get_by_id(db, item_id)
    if item:
        db.delete(item)
        db.flush()
    return item
