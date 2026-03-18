class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def sound(self):
        return self.name + " making sound"

    def info(self):
        return "Name: " + self.name + ", Age: " + str(self.age) + ", Color: " + self.color

    def __str__(self):
        return "Name: " + self.name + ", Age: " + str(self.age) + ", Color: " + self.color