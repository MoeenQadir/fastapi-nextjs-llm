
"""Item service (SQLite sync).

Contains business logic for item operations. Uses ItemRepository for database access.
"""

from sqlalchemy.orm import Session

from app.core.exceptions import NotFoundError
from app.db.models.item import Item
from app.repositories import item_repo
from app.schemas.item import ItemCreate, ItemUpdate


class ItemService:
    """Service for item-related business logic.

    This is an example service demonstrating the service layer pattern.
    Services contain business logic and use repositories for database operations.
    """

    def __init__(self, db: Session):
        self.db = db

    def get_by_id(self, item_id: str) -> Item:
        """Get item by ID.

        Raises:
            NotFoundError: If item does not exist.
        """
        item = item_repo.get_by_id(self.db, item_id)
        if not item:
            raise NotFoundError(
                message="Item not found",
                details={"item_id": item_id},
            )
        return item

    def get_multi(
        self,
        *,
        skip: int = 0,
        limit: int = 100,
        active_only: bool = False,
    ) -> list[Item]:
        """Get multiple items with pagination."""
        return item_repo.get_multi(
            self.db, skip=skip, limit=limit, active_only=active_only
        )

    def create(self, item_in: ItemCreate) -> Item:
        """Create a new item."""
        return item_repo.create(
            self.db,
            title=item_in.title,
            description=item_in.description,
        )

    def update(self, item_id: str, item_in: ItemUpdate) -> Item:
        """Update an item.

        Raises:
            NotFoundError: If item does not exist.
        """
        item = self.get_by_id(item_id)
        update_data = item_in.model_dump(exclude_unset=True)
        return item_repo.update(self.db, db_item=item, update_data=update_data)

    def delete(self, item_id: str) -> Item:
        """Delete an item.

        Raises:
            NotFoundError: If item does not exist.
        """
        item = item_repo.delete(self.db, item_id)
        if not item:
            raise NotFoundError(
                message="Item not found",
                details={"item_id": item_id},
            )
        return item
