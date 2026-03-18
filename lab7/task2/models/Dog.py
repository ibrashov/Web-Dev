from models.Animal import Animal
class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def sound(self):
        return self.name + " Gaf Gaf!"

    def eat(self):
        return self.name + " eating a pizza"

    def __str__(self):
        return super().__str__() + ", Breed: " + self.breed