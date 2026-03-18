from models.Animal import Animal
from models.Dog import Dog
from models.Cat import Cat
def main():
    animal = Animal("Generic", 5, "Gray")
    dog = Dog("Buddy", 3, "Brown", "Labrador")
    cat = Cat("Misty", 2, "White", 3)

    animals = [animal, dog, cat]

    for i in animals:
        print(i)
        print(i.info())
        print(i.sound())
        print()

    print(dog.eat())
    print(cat.jump())


if __name__ == "__main__":
    main()