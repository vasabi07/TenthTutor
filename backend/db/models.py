from typing import Optional, List
from uuid import uuid4
from datetime import datetime
from sqlmodel import SQLModel, Field, Relationship

def now():
    return datetime.now()

class User(SQLModel, table=True):
    __tablename__ = "User"

    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)
    username: str = Field(nullable=False, unique=True)
    email: str = Field(nullable=False, unique=True)
    password: str = Field(nullable=False)

    createdAt: datetime = Field(default_factory=now, nullable=False)
    updatedAt: datetime = Field(default_factory=now, nullable=False)

    documents: List["Document"]        = Relationship(back_populates="user")
    questionpapers: List["QuestionPaper"] = Relationship(back_populates="user")
    answerpapers: List["AnswerPaper"]  = Relationship(back_populates="user")


class Topic(SQLModel, table=True):
    __tablename__ = "Topic"

    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)
    name: str = Field(nullable=False, unique=True)

    createdAt: datetime = Field(default_factory=now, nullable=False)
    updatedAt: datetime = Field(default_factory=now, nullable=False)

    documents: List["Document"]        = Relationship(back_populates="topic")
    subtopic: List["Subtopic"]         = Relationship(back_populates="topic")
    questionpapers: List["QuestionPaper"] = Relationship(back_populates="topic")
    answerpapers: List["AnswerPaper"]  = Relationship(back_populates="topic")


class Subtopic(SQLModel, table=True):
    __tablename__ = "Subtopic"

    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)
    name: str = Field(nullable=False, unique=True)
    topicId: str = Field(foreign_key="Topic.id", nullable=False)

    createdAt: datetime = Field(default_factory=now, nullable=False)
    updatedAt: datetime = Field(default_factory=now, nullable=False)

    topic: Optional[Topic]             = Relationship(back_populates="subtopic")
    documents: List["Document"]        = Relationship(back_populates="subtopic")
    questionpapers: List["QuestionPaper"] = Relationship(back_populates="subtopic")
    answerpapers: List["AnswerPaper"]  = Relationship(back_populates="subtopic")


class Document(SQLModel, table=True):
    __tablename__ = "Document"

    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)
    userId: str = Field(foreign_key="User.id", nullable=False)
    topicId: str = Field(foreign_key="Topic.id", nullable=False)
    subtopicId: Optional[str] = Field(foreign_key="Subtopic.id")

    createdAt: datetime = Field(default_factory=now, nullable=False)
    updatedAt: datetime = Field(default_factory=now, nullable=False)

    user: Optional[User]             = Relationship(back_populates="documents")
    topic: Optional[Topic]           = Relationship(back_populates="documents")
    subtopic: Optional[Subtopic]     = Relationship(back_populates="documents")


class QuestionPaper(SQLModel, table=True):
    __tablename__ = "QuestionPaper"

    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)
    userId: str = Field(foreign_key="User.id", nullable=False)
    topicId: str = Field(foreign_key="Topic.id", nullable=False)
    subtopicId: Optional[str] = Field(foreign_key="Subtopic.id")

    createdAt: datetime = Field(default_factory=now, nullable=False)
    updatedAt: datetime = Field(default_factory=now, nullable=False)

    user: Optional[User]           = Relationship(back_populates="questionpapers")
    topic: Optional[Topic]         = Relationship(back_populates="questionpapers")
    subtopic: Optional[Subtopic]   = Relationship(back_populates="questionpapers")
    questions: List["Question"]    = Relationship(back_populates="paper")
    answerpapers: List["AnswerPaper"] = Relationship(back_populates="paper")


class Question(SQLModel, table=True):
    __tablename__ = "Question"

    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)
    text: str = Field(nullable=False)
    position: int = Field(nullable=False)
    questionpaperId: str = Field(foreign_key="QuestionPaper.id", nullable=False)

    paper: Optional[QuestionPaper] = Relationship(back_populates="questions")


class AnswerPaper(SQLModel, table=True):
    __tablename__ = "AnswerPaper"

    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)
    userId: str = Field(foreign_key="User.id", nullable=False)
    topicId: str = Field(foreign_key="Topic.id", nullable=False)
    subtopicId: str = Field(foreign_key="Subtopic.id", nullable=False)
    questionpaperId: str = Field(foreign_key="QuestionPaper.id", nullable=False)
    finalscore: Optional[float] = Field(default=None)

    createdAt: datetime = Field(default_factory=now, nullable=False)
    updatedAt: datetime = Field(default_factory=now, nullable=False)

    user: Optional[User]             = Relationship(back_populates="answerpapers")
    topic: Optional[Topic]           = Relationship(back_populates="answerpapers")
    subtopic: Optional[Subtopic]     = Relationship(back_populates="answerpapers")
    paper: Optional[QuestionPaper]   = Relationship(back_populates="answerpapers")
    answers: List["Answer"]          = Relationship(back_populates="paper")


class Answer(SQLModel, table=True):
    __tablename__ = "Answer"

    id: str = Field(default_factory=lambda: str(uuid4()), primary_key=True)
    text: str = Field(nullable=False)
    mark: Optional[float] = Field(default=None)
    llmRemark: Optional[str] = Field(default=None)
    strengths: Optional[str] = Field(default=None)
    weaknesses: Optional[str] = Field(default=None)
    answerpaperId: str = Field(foreign_key="AnswerPaper.id", nullable=False)

    createdAt: datetime = Field(default_factory=now, nullable=False)
    updatedAt: datetime = Field(default_factory=now, nullable=False)

    paper: Optional[AnswerPaper] = Relationship(back_populates="answers")
