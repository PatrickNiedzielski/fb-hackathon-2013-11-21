# Learn Python -- library functions
# Copyright (C) 2013 Cornell FB Hackathon Team.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

import gevent
import re

_north = [0, -1]
_south = [0, 1]
_east = [1, 0]
_west = [-1, 0]

def _sub_none(string):
    return re.sub('None', 'null', string)

class World:
    def __init__(self):
        self.grid = [[None]*19 for x in xrange(11)]

_world = World()

class Sign:
    def __init__(self, position, text):
        self.position = position
        self.text = text
        _world.grid[position[1]][position[0]] = self

    def __repr__(self):
        return "{ \"entity\": \"sign\" }";

class Chest:
    def __init__(self, position, items):
        self.position = position
        self.items = items

    def __repr__(self):
        return "{ \"entity\": \"chest\" }";
        
    def take_item(self):
        return self.items.pop();

class Slime:
    def __init__(self, position, text):
        self.position = position
        self.text = text
        _world.grid[position[1]][position[0]] = self

    def __repr__(self):
        return "{ \"entity\": \"slime\" }";

class Wall:
    def __init__(self, position):
        self.position = position
        _world.grid[position[1]][position[0]] = self

    def __repr__(self):
        return "{ \"entity\": \"wall\" }";

class LockedChest:
    def __init__(self, position, key):
        self.position = position
        self.key = key
        _world.grid[position[1]][position[0]] = self

    def __repr__(self):
        return "{ \"entity\": \"chest\" }";

    def try_unlock(self, with_key):
        if (with_key == self.key):
            print _sub_none(repr(_world.grid))
            _world.grid[position[1]][position[0]] = None
            return true;
        else:
            return false;

class LockedDoor:
    def __init__(self, position, key):
        self.position = position
        self.key = key
        _world.grid[position[1]][position[0]] = self

    def __repr__(self):
        return "{ \"entity\": \"door\" }";

    def try_unlock(self, with_key):
        if (with_key == self.key):
            print _sub_none(repr(_world.grid))
            _world.grid[position[1]][position[0]] = None
            return true;
        else:
            return false;

class Potion:
    color = "green"
    current_count = 0

    def __init__(self, position):
        self.position = position
        _world.grid[position[1]][position[0]] = self

    def __repr__(self):
        if self.color == "green":
            return "{ \"entity\": \"green_potion\" }";
        else:
            return "{ \"entity\": \"red_potion\" }";

    def mix_in(self, ingredient):
        if self.color == "green":
            if ingredient != "zucchini":
                raise Exception("Wrong ingredient!")
            else:
                self.current_count += 1
                if (self.current_count == 3):
                    self.color = "red"
                    self.current_count = 0
        elif self.color == "red":
            if (ingredient != "cherry" and 
                ingredient != "strawberry"):
                raise Exception("Wrong ingredient!")
            elif (ingredient == "strawberry" and
                  (player1.inventory.count("cherry") != 0 or
                   player2.inventory.count("cherry") != 0)):
                raise Exception("Wrong ingredient!")
            else:
                self.current_count += 1
                if (self.current_count == 5):
                    _world.grid[position[1]][position[0]] = None
        
        print _sub_none(repr(_world.grid))
        gevent.sleep(0)

class Item:
    def __init__(self, name, position):
        self.position = position
        self.name = name

    def __repr__(self):
        return "{ \"entity\": \"item\", \"info\": {\"name\": " + \
            self.name + "}}"

class Player:
    _direction = [0, 1]
    _messages = []

    def __init__(self, name, position, other_ = None):
        self._name = name
        self._position = position
        other = other_

    def __repr__(self):
        str_dirs = { tuple(_north) : "N", tuple(_south) : "S",
                     tuple(_east) : "E", tuple(_west) : "W" }
        str_dir = str_dirs[tuple(self._direction)]
        return "{ \"entity\": \"player\", " + \
            "\"info\": {\"name\": " + str(self._name) + \
            ", \"direction\": \"" + str_dir + "\"}}"

    def _turn_dir(self, dir):
        self._direction = dir

    def turn_left(self):
        self._turn_dir(_west)
        print _sub_none(repr(_world.grid))
        gevent.sleep(0)

    def turn_right(self):
        self._turn_dir(_east)
        print _sub_none(repr(_world.grid))
        gevent.sleep(0)

    def turn_up(self):
        self._turn_dir(_north)
        print _sub_none(repr(_world.grid))
        gevent.sleep(0)

    def turn_down(self):
        self._turn_dir(_south)
        print _sub_none(repr(_world.grid))
        gevent.sleep(0)

    def _move_dir(self, dir):
        temppos = map(lambda x,y: x+y, self._position, dir)
        if (temppos[1] < 0 or temppos[1] >= len(_world.grid) or
            temppos[0] < 0 or temppos[0] >= len(_world.grid[0])):
            raise Exception("Outside Map")
        if (_world.grid[temppos[1]][temppos[0]] != None):
            raise Exception("Collision")
        _world.grid[self._position[1]][self._position[0]] = None
        self._position = temppos
        _world.grid[self._position[1]][self._position[0]] = self
        self._turn_dir(dir);
        print _sub_none(repr(_world.grid))

    def move_left(self, num = 1):
        if num > 4:
            raise "Can't jump that far"
        for i in range(num):
            self._move_dir(_west)
        gevent.sleep(0)

    def move_right(self, num = 1):
        if num > 4:
            raise "Can't jump that far"
        for i in range(num):
            self._move_dir(_east)
        gevent.sleep(0)

    def move_up(self, num = 1):
        if num > 4:
            raise "Can't jump that far"
        for i in range(num):
            self._move_dir(_north)
        gevent.sleep(0)

    def move_down(self, num = 1):
        if num > 4:
            raise "Can't jump that far"
        for i in range(num):
            self._move_dir(_south)
        gevent.sleep(0)

    def _run_script(self, script):
        exec script

    def say(self, message):
        print str([self._name, message]);
        self._messages.append(message)
        gevent.sleep(0)

    def wait(self):
        gevent.sleep(0)

    def get_in_front(self):
        temppos = map(lambda x,y: x+y, self._position, dir)
        if (temppos[1] < 0 or temppos[1] >= len(_world.grid) or
            temppos[0] < 0 or temppos[0] >= len(_world.grid[0])):
            raise Exception("Outside Map")
        return _world.grid[temppos[1]][temppos[0]]

    def take_in_front(self):
        temp = get_in_front();
        temppos = map(lambda x,y: x+y, self._position, dir)
        _world.grid[temppos[1]][temppos[0]] = None
        return temp

# Positions should be overridden in each level script
player1 = Player(1, [1, 0])
player2 = Player(2, [0, 1], player1)
player1.other = player2
