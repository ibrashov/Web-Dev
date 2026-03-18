from models.Animal import Animal
class Cat(Animal):
    def __init__(self, name, age, color, jumper):
        super().__init__(name, age, color)
        self.jumper = jumper

    def sound(self):
        return self.name + " meooow"

    def jump(self):
        return self.name + " jumping " + str(self.jumper) + " height"

    def __str__(self):
        return super().__str__() + ", Jump: " + str(self.jumper) + " height"